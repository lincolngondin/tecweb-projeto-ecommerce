import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

const FeaturedProduct = ({ product }: Props) => {
  const { addToCart } = useCart();
  return (
    <div className="relative">
      <Card className="bg-gray-800 border-gray-700 overflow-hidden pl-10">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-6xl"><img src={product.image} alt={product.name} /></div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-400">Preço:</span> {product.price}</p>
                  <p><span className="text-gray-400">Detalhes:</span></p>
                  <p className="text-sm">Sistema Operacional: Android 14</p>
                  <p className="text-sm">Wi-Fi: 2.4 Ghz e 5Ghz</p>
                  <p className="text-sm">Armazenamento: 128GB</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                  Comprar Agora
                </Button>
                <Button variant="outline" className="border-gray-600 text-black-300 hover:bg-gray-700" onClick={() => addToCart(product)}>
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-700 hover:text-white rounded-full p-2"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-700 hover:text-white rounded-full p-2"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FeaturedProduct;
