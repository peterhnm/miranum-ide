import { Artifact, DigiwfConfig, DigiWFDeploymentPlugin, DigiWFGeneratorPlugin } from "./types";
import { availableGeneratorPlugins } from "./generate/plugins";

export function createDigiwfLib(projectVersion: string, projectName: string, workspace: object, deployment: DigiWFDeploymentPlugin[]): DigiwfLib {
    return new DigiwfLib({
        projectVersion: projectVersion,
        name: projectName,
        workspace: workspace,
        deployment: deployment
    });
}

// observer pattern
// https://en.wikipedia.org/wiki/Observer_pattern#Java
export class DigiwfLib {
    projectConfig: DigiwfConfig;
    generatorPlugins: DigiWFGeneratorPlugin[] = availableGeneratorPlugins;

    constructor(config: DigiwfConfig) {
        this.projectConfig = config
    }

    public async deploy(target: string, artifact: Artifact): Promise<Artifact> {
        await Promise.all(
            this.projectConfig.deployment.map(plugin => plugin.deploy(target, artifact))
        );
        return artifact;
    }

    public async initProject(projectName: string): Promise<Artifact[]> {
        const filesToGenerate = [
            {name: projectName, type: "process-ide.json"},
            {name: projectName, type: "bpmn"},
            // {name: name, type: "dmn"}
            {name: "start", type: "form"},
            {name: "control", type: "form"},
            {name: "dev", type: "config"},
            {name: "prod", type: "config"},
            {name: "element-templates", type: ".gitkeep"},
            {name: "README.md", type: "README.md"}
        ];
        const generatedFiles = [];
        for (const file of filesToGenerate) {
            generatedFiles.push(await this.generateArtifact(file.name, file.type, projectName));
        }
        return generatedFiles;
    }

    public async generateArtifact(artifactName: string, type: string, project: string): Promise<Artifact> {
        const generator = this.generatorPlugins.find(generator => generator.type === type);
        if (!generator) {
            throw new Error(`File type ${type} is not supported.`);
        }
        return generator.generate(artifactName, project);
    }

}
