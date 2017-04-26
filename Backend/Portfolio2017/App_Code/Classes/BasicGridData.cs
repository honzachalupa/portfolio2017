using System.Collections.Generic;

public class BasicGridData
{
    public string Headline { get; set; }
    public string Id { get; set; }
    public string Class { get; set; }
    public List<BasicGridItemData> Items { get; set; }
}

public class BasicGridItemData
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Class { get; set; }
    public BasicGridItemImageData Image { get; set; }
    public string Url { get; set; }
    public Company Company { get; set; }
}

public class BasicGridItemImageData
{
    public string Url { get; set; }
    public string Size { get; set; }
}