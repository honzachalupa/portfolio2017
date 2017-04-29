using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Globalization;
using HtmlAgilityPack;

public class Data
{
    public static List<Project> Projects
    {
        get
        {
            string appDataPath = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "App_Data");
            StreamReader sr = new StreamReader(appDataPath + "/data.json");
            string json = sr.ReadToEnd();
            sr.Close();
            return JsonConvert.DeserializeObject<List<Project>>(json);
        }
    }

    public static List<Tweet> Tweets
    {
        get
        {
            int tweetsToLoad = Config.ConfigGetter.TweetsToLoad;

            var Webget = new HtmlWeb();
            Webget.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
            var doc = Webget.Load("http://www.twitter.com/janchalupa/");
            var tweetsNode = doc.DocumentNode.SelectNodes("//div[contains(@class, 'js-stream-tweet')]");

            var tweets = new List<Tweet>();

            for (int i = 0; i < tweetsToLoad; i++)
            {
                HtmlNode tweetNode = tweetsNode[i];

                HtmlNode timestampNode = tweetNode.SelectSingleNode(".//a[contains(@class, 'tweet-timestamp')]");
                HtmlNode contentNode = tweetNode.SelectSingleNode(".//p[contains(@class, 'js-tweet-text')]");

                string timestampValue = timestampNode.GetAttributeValue("title", "");
                string urlValue = tweetNode.GetAttributeValue("data-permalink-path", "");

                DateTime timestamp = DateTime.ParseExact(timestampValue, "h:mm tt - d MMM yyyy", CultureInfo.InvariantCulture);
                string content = contentNode.InnerText;
                string url = "http://www.twitter.com" + urlValue;

                tweets.Add(new Tweet
                {
                    Timestamp = timestamp,
                    Content = content,
                    Url = url
                });
            }

            return tweets;
        }    
    }
}