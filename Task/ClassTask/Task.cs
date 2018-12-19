using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task.ClassTask
{
    public class TaskPlus: ITaskPluscs
    {
        public bool CheckPlus(int currentRowDown, int currentRowUp, int crrentRow, int indexCheckColumn, string[] matrix, int count, string strColumn)
        {
            bool isPlus = true;
            if (currentRowDown > -1)
            {
                for (int j = currentRowDown; j < crrentRow; j++)
                {
                    int indexStrColumn = 0;
                    for (int k = indexCheckColumn; k < indexCheckColumn + strColumn.Length; k++)
                    {
                        if (matrix[j][k] != strColumn[indexStrColumn])
                        {
                            isPlus = false;
                            break;
                        }
                        indexStrColumn++;
                    }
                    if (!isPlus)
                        break;
                }
            }
            else
                isPlus = false;

            if (isPlus)
            {
                if (currentRowUp < count)
                {
                    for (int j = currentRowUp; j > crrentRow; j--)
                    {
                        int indexStrColumn = 0;
                        for (int k = indexCheckColumn; k < indexCheckColumn + strColumn.Length; k++)
                        {
                            if (matrix[j][k] != strColumn[indexStrColumn])
                            {
                                isPlus = false;
                                break;
                            }
                            indexStrColumn++;
                        }
                        if (!isPlus)
                            break;
                    }
                }
            }

            return isPlus;
        }

        public string getColumn(int center)
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

        public string getRow(int count)
        {
            String strRow = String.Empty;

            for (int i = 0; i < count; i++)
            {
                strRow += '1';
            }
            return strRow;
        }

        public int FindPlus(int count, string[] matrix)
        {
            if (count >= 3 && count <= 2000 && matrix.Length == count)
            {
                int findColumn = 3;
                int currentRowDown = (findColumn - 2);
                int currentRowUp = (findColumn + 2);

                int pluse = 0;


                for (int i = 1; i < count - 1; i++)
                {
                    int indexFindColumn = matrix[i].IndexOf(getRow(findColumn));
                    if (indexFindColumn != -1)
                    {
                        findColumn = 3;
                        currentRowDown = i - 1;
                        currentRowUp = i + 1;
                        while (true)
                        {
                            while (indexFindColumn != -1)
                            {
                                if (CheckPlus(currentRowDown, currentRowUp, i, indexFindColumn, matrix, count, getColumn(findColumn)))
                                {
                                    pluse++;

                                }
                                indexFindColumn = matrix[i].IndexOf(getRow(findColumn), indexFindColumn + 1);
                            }
                            findColumn = findColumn + 2;
                            currentRowDown = currentRowDown - 1;
                            currentRowUp = currentRowUp + 1;
                            if (currentRowDown < 0 || currentRowUp >= count)
                                break;
                            indexFindColumn = matrix[i].IndexOf(getRow(findColumn));
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
