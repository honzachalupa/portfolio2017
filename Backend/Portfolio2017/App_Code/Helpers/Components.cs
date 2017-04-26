using System.Web;

namespace Portfolio2017.Helpers
{
    public static class Components
    {
        public static IHtmlString BasicArticle(string headline, string content)
        {
            return new HtmlString("<article class=\"basic-article\"><h2 class=\"headline\">" + headline + "</h2><p class=\"content\">" + content + "</p></article>");
        }

        public static IHtmlString BasicGrid(BasicGridData data)
        {
            var html =
                "<article class=\"basic-grid " + data.Class + "\" data-id=\"" + data.Id + "\">" +
                    "<h2 class=\"headline\">" + data.Headline + "</h2>" +
                    "<ul class=\"grid\">";
                        foreach (var item in data.Items)
                        {
                            html +=
                                "<a class=\"item\" id=\"" + item.Class + "\" href=\"" + item.Url + "\" title=\"Show details for " + item.Title + " project\" data-aspect-ratio=\"4:3\" data-aspect-ratio-mobile=\"16:9\">" +
                                    "<div class=\"image " + item.Image.Size + "\" style=\"background-image: url('" + item.Image.Url + "')\"></div>";

                            if (item.Company != null)
                            {
                                html +=
                                    "<img src=\"" + item.Company.Url + "\" class=\"company-logo\" alt=\"" + item.Company.Name + " logo\" />" +
                                    "<h3 class=\"headline\">" + item.Title + "</h3>";
                            }

                            html += "</a>";
                        }

                        html += 
                    "</ul>" +
                "</article>";

            return new HtmlString(html);
        }

        public static IHtmlString BasicTeaser(BasicTeaserData data)
        {
            var html =
                "<article class=\"basic-teaser\">" +
                    "<h2 class=\"headline\">" + data.Headline + "</h2>" +
                    "<a class=\"image\" href=\"ProjectDetail.cshtml?id=" + data.Id + "\" style=\"background-image: url('" + data.ImageUrl + "')\" title=\"Show project details\" data-aspect-ratio=\"4:3\"></a>" +
                    "<div class=\"text-section\">" +
                        "<h2 class=\"headline\">" + data.Headline + "</h2>" +
                        "<h3 class=\"subheadline\">" + data.Subheadline + "</h3>" +
                        "<p class=\"content\">" + data.Content.Replace("<p>", "").Replace("</p>", "") + "</p>" +
                        "<a class=\"btn show-more\" href=\"ProjectDetail.cshtml?id=" + data.Id + "\">Show project details</a>";

            if (data.Company != null)
            {
                html +=
                        "<a href=\"" + data.Company.Url + "\" class=\"company\" title=\"" + data.Company.Name + "\">" +
                            "<p>Made for " + data.Company.Name + " company</p>" +
                            "<img src =\"" + data.Company.Logo + "\" class=\"logo\" alt=\"" + data.Company.Name + " logo\" />" +
                        "</a>";
            }

            html +=
                    "</div>" +
                "</article>";

            return new HtmlString(html);
        }
    }
}