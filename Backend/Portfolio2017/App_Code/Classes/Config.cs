using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web;

public class Config
{
    public List<SocialProfile> SocialProfiles { get; set; }
    public int TweetsToLoad { get; set; }

    public static Config ConfigGetter
    {
        get
        {
            string appDataPath = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "App_Data");
            StreamReader sr = new StreamReader(appDataPath + "/config.json");
            string json = sr.ReadToEnd();
            sr.Close();

            return JsonConvert.DeserializeObject<Config>(json);
        }
    }

    public static List<SocialProfile> SocialProfilesList
    {
        get
        {
            return ConfigGetter.SocialProfiles;
        }
    }

    public static int TweetsCount
    {
        get
        {
            return ConfigGetter.TweetsToLoad;
        }
    }
}