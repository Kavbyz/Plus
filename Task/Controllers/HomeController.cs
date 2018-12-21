using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Task.Models;
using Task;
using Task.ClassTask;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

namespace Task.Controllers
{
    public class HomeController : Controller
    {       
        ITaskPluscs task;
        public HomeController(ITaskPluscs taskPluscs)
        {
            task = taskPluscs;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index([FromBody]PlusModel plus)
        {
            int pluses = task.FindPlus( plus.Count, plus.Matrix);
            return Ok(pluses);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
