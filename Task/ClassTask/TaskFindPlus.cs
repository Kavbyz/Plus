using System;
using Task.Models;

namespace Task.ClassTask
{
    public class TaskFindPlus: IFindPlus
    {
        ICheckPlus checkPlus;
        IGetColumnStr columnStr;
        IGetRowStr rowStr;

        public TaskFindPlus(ICheckPlus checkPlus, IGetColumnStr columnStr, IGetRowStr rowStr)
        {
            this.checkPlus = checkPlus;
            this.columnStr = columnStr;
            this.rowStr = rowStr;
        }

        public int FindPlus(PlusModel plusModel)
        {
            int count = plusModel.Count;
            string[] matrix = plusModel.Matrix;
            if (count >= 3 && count <= 2000 && matrix.Length == count)
            {
                int findColumn = 3;
                int currentRowDown = (findColumn - 2);
                int currentRowUp = (findColumn + 2);

                int pluse = 0;


                for (int i = 1; i < count - 1; i++)
                {
                    int indexFindColumn = matrix[i].IndexOf(rowStr.GetRowStr(findColumn));
                    if (indexFindColumn != -1)
                    {
                        findColumn = 3;
                        currentRowDown = i - 1;
                        currentRowUp = i + 1;
                        while (true)
                        {
                            while (indexFindColumn != -1)
                            {
                                if (checkPlus.CheckPlus(currentRowDown, currentRowUp, i, indexFindColumn, plusModel, columnStr.GetColumnStr(findColumn)))
                                {
                                    pluse++;

                                }
                                indexFindColumn = matrix[i].IndexOf(rowStr.GetRowStr(findColumn), indexFindColumn + 1);
                            }
                            findColumn = findColumn + 2;
                            currentRowDown = currentRowDown - 1;
                            currentRowUp = currentRowUp + 1;
                            if (currentRowDown < 0 || currentRowUp >= count)
                                break;
                            indexFindColumn = matrix[i].IndexOf(rowStr.GetRowStr(findColumn));
                            if (indexFindColumn == -1)
                                break;
                        }
                        findColumn = 3;
                        currentRowDown = i - 1;
                        currentRowUp = i + 1;
                    }



                }
                return pluse;
            }
            return 0;
        }
    }
}
