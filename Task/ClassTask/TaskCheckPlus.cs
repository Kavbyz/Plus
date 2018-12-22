using Task.Models;

namespace Task.ClassTask
{
    public class TaskCheckPlus:ICheckPlus
    {
        public bool CheckPlus(int currentRowDown, int currentRowUp, int crrentRow, int indexCheckColumn, PlusModel plusModel, string strColumn)
        {
            int count = plusModel.Count;
            string[] matrix = plusModel.Matrix;
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
    }
}
