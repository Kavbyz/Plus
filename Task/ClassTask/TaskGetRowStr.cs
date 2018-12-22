using System;

namespace Task.ClassTask
{
    public class TaskGetRowStr:IGetRowStr
    {
        public string GetRowStr(int count)
        {
            String strRow = String.Empty;

            for (int i = 0; i < count; i++)
            {
                strRow += '1';
            }
            return strRow;
        }
    }
}
