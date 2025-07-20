"use client";

import Header from "@/components/Header";
import FeaturedProduct from "@/components/FeaturedProduct";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, catalogProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const page = () => {

  const [pesquisa, setPesquisa] = useState<string>();
  const [produtoDestaque, setProdutoDestaque] = useState<Product>(featuredProducts[1]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section id="destaques">
          <h2 className="text-2xl font-bold text-white mb-6">Destaques</h2>
          <FeaturedProduct product={produtoDestaque} />
        </section>
        <section id="catalogo">
          <div className="bg-gray-800 rounded-lg p-6 mb-8 mt-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2 w-full lg:w-auto ">
                <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 w-full lg:w-auto">
                <Filter className="text-gray-400 h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black-300 hover:bg-gray-700 hover:text-white"
                  >
                    Marca
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black-300 hover:bg-gray-700 hover:text-white"
                  >
                    Preço
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Mais Vendidos
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {catalogProducts.map((product) => (
              <div key={product.id} onClick={() => setProdutoDestaque(product)}>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default page;
