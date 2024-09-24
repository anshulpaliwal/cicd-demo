import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const demoCicdPipeline = new pipelines.CodePipeline(this, 'demopipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('anshulpaliwal/cicd-demo', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      })}
      )

  }
}
