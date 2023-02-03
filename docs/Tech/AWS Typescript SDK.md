---

---

# AWS TypeScript SDK Examples

## Pass different values for the instance type to the script for each environment

```typescript
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: { instanceType: ec2.InstanceType },) {
    super(scope, id, props);

    // EC2 Instance 1
    const instance1 = new ec2.Instance(this, 'Instance1', {
      instanceType: props.instanceType,
      machineImage: new ec2.AmazonLinuxImage()
    });

    // EC2 Instance 2
    const instance2 = new ec2.Instance(this, 'Instance2', {
      instanceType: props.instanceType,
      machineImage: new ec2.AmazonLinuxImage()
    });

    // RDS Database
    const database = new rds.DatabaseInstance(this, 'Database', {
      engine: rds.DatabaseInstanceEngine.POSTGRES,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)
    });

    // Load Balancer
    const loadBalancer = new elbv2.LoadBalancer(this, 'LoadBalancer', {
      vpc: instance1.vpc,
      internetFacing: true
    });
    loadBalancer.addTarget(instance1);
    loadBalancer.addTarget(instance2);

    // Allow incoming traffic from the EC2 instances to the RDS database
    instance1.connections.allowFrom(database, ec2.Port.tcp(5432));
    instance2.connections.allowFrom(database, ec2.Port.tcp(5432));
  }
}

const app = new cdk.App();

const devEnv = { account: '123456789101', region: 'us-west-2' };
new MyStack(app, 'MyStackDev', {
  env: devEnv,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
});

const testEnv = { account: '123456789102', region: 'us-west-2' };
new MyStack(app, 'MyStackTest', {
  env: testEnv,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
});

const prodEnv = { account: '123456789103', region: 'us-west-2' };
new MyStack(app, 'MyStackProd', {
  env: prodEnv,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MEDIUM),
});

app.synth();
```