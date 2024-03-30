namespace _9xCar.Models
{
    public class DetailsVM
    {
        public Carro Anterior { get; set; }
        public Carro Atual { get; set; }
        public Carro Proximo { get; set; }   
        public List<Marca> Marcas { get; set; }
    }
}