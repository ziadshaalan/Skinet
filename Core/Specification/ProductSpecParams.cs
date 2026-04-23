using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// request DTO for query-string parameters
// normalizes incoming values
// separates query logic from controller logic

namespace Core.Specification
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 50;
        public int PageIndex { get; set; } = 1;

        private int _pageSize = 6;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }


        //Point of private backing field: If you used an auto-property public List<string> Brands { get; set; } — you can't inject logic in the setter. That's the only reason the backing field exists here, Other uses for (Validations on set)

        private List<string> _brands = [];

        public List<string> Brands
        {
            get => _brands;
            set
            {
                _brands = value.SelectMany(x => x.Split(',',
                    StringSplitOptions.RemoveEmptyEntries)).ToList();   //Removes empty strings like in ["Nike", "", "Adidas", ""]
            }
        }
        //The set accessor runs(automatically when you assign a value), It processes the input before storing it.
        //The get accessor returns the processed data



        private List<string> _type = [];

        public List<string> Types
        {
            get => _type;
            set
            {
                _type = value.SelectMany(x => x.Split(',',
                    StringSplitOptions.RemoveEmptyEntries)).ToList();

            }
        }

        public string? Sort { get; set; }

        private string? _search;

        public string Search
        {
            get => _search ?? "";
            set => _search = value.ToLower();
        }



    }
}
