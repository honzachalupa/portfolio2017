using System.Collections.Generic;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Url { get; set; }
    public string PreviewImage { get; set; }
    public string PreviewImageMobile { get; set; }
    public List<string> Gallery { get; set; }
    public bool LivePreviewAllowed { get; set; }
    public string DevelopmentStage { get; set; }
    public string Type { get; set; }
    public Company Company { get; set; }
}