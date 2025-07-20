// Adiciona a diretiva para que hooks como o useRouter funcionem
"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; // Importa o hook de rota do Next.js
import Link from "next/link"; // Importa o componente de Link do Next.js
import { useCart } from "@/context/CartContext";

const Header = () => {
  // Usa o hook de rota do Next.js
  const router = useRouter();
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-white">E-commerce</h1>
            <nav className="hidden md:flex space-x-6">
              {/* Usa o componente Link para navegação otimizada */}
              <Link href="/" className="text-gray-300 transition-colors hover:text-white">
                Home
              </Link>
              <a href="#destaques" className="text-gray-300 transition-colors hover:text-white">
                Destaques
              </a>
              <a href="#catalogo" className="text-gray-300 transition-colors hover:text-white">
                Catálogo de produtos
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden items-center space-x-2 md:flex">
              <Input
                type="search"
                placeholder="Pesquisar Produtos..."
                className="w-64 border-gray-700 bg-gray-800 text-white placeholder-gray-400"
              />
              <Button size="sm" variant="secondary">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800" onClick={() => router.push('/not-found')}>
                Criar Conta
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/not-found')}>
                Entrar
              </Button>
            </div>

            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-gray-800"
                onClick={() => router.push("/carrinho")}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;