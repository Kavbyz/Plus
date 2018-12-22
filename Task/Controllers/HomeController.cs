using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Task.ClassTask;
using Task.Models;

namespace Task.Controllers
{
    public class HomeController : Controller
    {       
        IFindPlus task;
        public HomeController(IFindPlus taskPlus)
        {
            task = taskPlus;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index([FromBody]PlusModel plus)
        {
            int pluses = task.FindPlus(plus);
            return Ok(pluses);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
