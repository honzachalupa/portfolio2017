using System;
using System.Web;

namespace Portfolio2017.Helpers
{
    public static class Components
    {
        public static IHtmlString BasicArticle(string headline, string content)
        {
            var html =
                "<article class=\"basic-article\">" +
                    "<h2 class=\"headline\">" + headline + "</h2>" + 
                    "<p class=\"content\">" + content + "</p>" + 
                "</article>";

            return new HtmlString(html);
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
                                    "<img src=\"" + item.Company.Url + "\" class=\"company-logo\" alt=\"" + item.Company.Name + " logo\" />";
                            }

                            html +=
                                    "<h3 class=\"headline\">" + item.Title + "</h3>" +
                                "</a>";
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
                        "<p class=\"content\">" + data.Content.Replace("<p>", " ").Replace("</p>", " ").Replace("  ", " ") + "</p>" +
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

        public static IHtmlString SocialProfile(string name, string imageUrl, string url)
        {
            var html =
                "<li class=\"item\">" +
                    "<a href=\"" + url + "\" title=\"My " + name + " profile\">" +
                        "<div class=\"icon\">" +
                            "<img src=\"" + imageUrl + "\" alt=\"" + name + " logo\">" +
                        "</div>" +
                        "<div class=\"label\">" + name + "</div>" +
                    "</a>" +
                "</li>";

            return new HtmlString(html);
        }

        public static IHtmlString Tweet(DateTime timestamp, string content, string url)
        {
            string dateTime = timestamp.ToString("H:mm d.M.yyyy");

            var html =
                "<a class=\"tweet\" href=\"" + url + "\" title=\"Show tweet details\">" +
                    "<time class=\"timestamp\" datetime=\"" + timestamp + "\">" + dateTime + "</time>" +
                    "<p class=\"content\">" + content + "</p>" +
                "</a>";

            return new HtmlString(html);
        }
    }
}