using Task.Models;

namespace Task.ClassTask
{
    public interface ICheckPlus
    {
        bool CheckPlus(int currentRowDown, int currentRowUp, int crrentRow, int indexCheckColumn, PlusModel plusModel, string strColumn);
    }
}
