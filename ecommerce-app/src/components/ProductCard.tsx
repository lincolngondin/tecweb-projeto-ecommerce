
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  isSmall?: boolean;
}

const ProductCard = ({ name, price, image, isSmall = false }: ProductCardProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 group">
      <CardContent className={`p-4 ${isSmall ? 'h-48' : 'h-80'}`}>
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center mb-4">
            <div className={`bg-gray-100 rounded-lg ${isSmall ? 'w-16 h-20' : 'w-24 h-32'} flex items-center justify-center`}>
              <div className="text-gray-400 text-xs text-center">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-medium text-sm mb-2 group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
            <p className="text-gray-400 text-xs mb-3">{price}</p>
            
            {!isSmall && (
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                Ver Detalhes
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
