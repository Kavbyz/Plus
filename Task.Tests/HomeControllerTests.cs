using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Task.ClassTask;
using Task.Controllers;
using Task.Models;

namespace Task.Tests
{
    public class HomeControllerTests
    {
        [Test, MaxTime(10000)]
        public void CheckPlusTest()
        {
            PlusModel plusModel = new PlusModel(5, new string[] { "00100", "00100", "11111", "00100", "00100" });

            var checkPlus = new TaskCheckPlus();
            var columnStr = new TaskGetColumnStr();

            var result = checkPlus.CheckPlus(1, 3, 2, 1, plusModel, columnStr.GetColumnStr(3));

            Assert.That(true, Is.EqualTo(true));
        }

        [Test, MaxTime(10000)]
        public void GetRowStrTest()
        {
            var getRowStr = new TaskGetRowStr();

            var result = getRowStr.GetRowStr(5);

            Assert.That("11111", Is.EqualTo(result));
        }

        [Test, MaxTime(10000)]
        public void GetColumnStrTest()
        {
            var columnStr = new TaskGetColumnStr();

            var result = columnStr.GetColumnStr(5);

            Assert.That("00100", Is.EqualTo(result));
        }

        [Test, MaxTime(10000)]
        public void FindPlusTest()
        {
            PlusModel plusModel = new PlusModel(5, new string[] { "00100", "00100", "11111", "00100", "00100" });

            var mockGetColumnStr = new Mock<TaskGetColumnStr>();
            var mockGetRowStr = new Mock<TaskGetRowStr>();
            var mockCheckPlus = new Mock<TaskCheckPlus>();

            var findPlus = new TaskFindPlus(mockCheckPlus.Object, mockGetColumnStr.Object, mockGetRowStr.Object);

            var result = findPlus.FindPlus(plusModel);


            Assert.That(2, Is.EqualTo(result));
        }
        

        [Test, MaxTime(10000)]
        public void IndexTest()
        {
            PlusModel plusModel = new PlusModel(5, new string[] { "00100", "00100", "11111", "00100", "00100" });

            var mockFindPlus = new Mock<IFindPlus>();
            mockFindPlus.Setup(find => find.FindPlus(plusModel)).Returns(() => 2);


            HomeController controller = new HomeController(mockFindPlus.Object);

            var result = controller.Index(plusModel) as OkObjectResult;


            Assert.That(2, Is.EqualTo(result.Value));
        }
    }
}
