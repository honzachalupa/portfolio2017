using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web;

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
}