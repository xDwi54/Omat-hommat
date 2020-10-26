using System;

namespace Harjotuksia
{
    class Program
    {
        static void Main(string[] args)
        {
            nimi();
        }
        public static void nimi()
        {
            Console.WriteLine("Syötä Nimesi");
            string nimi = Console.ReadLine();
            Console.WriteLine("Hei " + nimi);
        }
    }
}
