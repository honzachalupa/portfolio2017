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
    }
}