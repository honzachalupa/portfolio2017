using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

public class Gallery
{
    public class PhotoData
    {
        public string ImageUrl { get; set; }
        public string Url { get; set; }
    }

    public static List<PhotoData> Photos
    {
        get
        {
            return null;
        }
    }
}