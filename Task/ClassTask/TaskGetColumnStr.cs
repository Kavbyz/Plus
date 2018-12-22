using System;

namespace Task.ClassTask
{
    public class TaskGetColumnStr:IGetColumnStr
    {
        public string GetColumnStr(int center)
        {
            String strColumn = String.Empty;
            int indexCheckColumn = (center / 2);
            for (int i = 0; i < center; i++)
            {
                if (i == indexCheckColumn)
                {
                    strColumn += '1';
                }
                else
                {
                    strColumn += '0';
                }
            }
            return strColumn;
        }
    }
}
