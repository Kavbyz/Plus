using System;

namespace Task.Models
{
    [Serializable]
    public class PlusModel
    {
        int count;
        string[] matrix;

        public PlusModel(int count, string[] matrix)
        {
            this.Count = count;
            this.Matrix = matrix;
        }

        public int Count { get => count; set => count = value; }
        public string[] Matrix { get => matrix; set => matrix = value; }
    }
}
