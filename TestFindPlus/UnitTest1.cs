using System;
//using Xunit;
using Task.Controllers;
using Task.ClassTask;
using Task.Models;
using Moq;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;

namespace TestFindPlus
{
    public class UnitTest1
    {
        [Test, MaxTime(2000)]
        public void Test1()
        {
            PlusModel plusModel = new PlusModel(3, new string[] { "00100", "00100", "11111", "00100", "00100" });

            TaskGetColumnStr taskGetColumnStr = new TaskGetColumnStr();

            var mockGetColumnStr = new Mock<IGetColumnStr>();
            var mockGetRowStr = new Mock<IGetRowStr>();
            var mockCheckPlus = new Mock<ICheckPlus>();

            var mockFindPlus = new Mock<IFindPlus>(mockGetColumnStr, mockGetRowStr, mockCheckPlus);
            mockFindPlus.Setup(find => find.FindPlus(plusModel)).Returns(()=>3);


            HomeController controller = new HomeController(mockFindPlus.Object);

            var result = controller.Index(plusModel) as OkObjectResult;

            Assert.AreEqual(3, result.Value);
        }
    }
}
