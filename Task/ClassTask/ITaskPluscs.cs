using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task.ClassTask
{
    public interface ITaskPluscs
    {
        bool CheckPlus(int currentRowDown, int currentRowUp, int crrentRow, int indexCheckColumn, string[] matrix, int count, string strColumn);
        string getColumn(int center);
        string getRow(int count);
        int FindPlus(int count, string[] matrix);
    }
}
