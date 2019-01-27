export class CampaignDTO {
    public id: Number;
    public title: String;
    public description: String;
    public category: String;

    constructor (job: CampaignDTO) {
        if (!job) {
            return;
        }
        this.id = job.id;
        this.title = job.title;
        this.description = job.description;
        this.category = job.category;
    }
}