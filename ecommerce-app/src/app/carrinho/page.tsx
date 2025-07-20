"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function CarrinhoPage() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => {
        const numericPrice = parseFloat(item.price.replace("R$", "").replace(",", "."));
        return sum + numericPrice * item.quantity;
    }, 0);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />

            <main className="container mx-auto px-4 py-8 space-y-8">
                <h1 className="text-3xl font-bold">Carrinho de Compras</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-400">Seu carrinho está vazio.</p>
                ) : (
                    <>
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-400">Quantidade: {item.quantity}</p>
                                            <p className="text-sm text-gray-400">Preço unitário: {item.price}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-red-600 text-red-400 hover:bg-red-700 hover:text-white"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remover
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                            <div className="flex justify-between text-lg font-medium">
                                <span>Total:</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <Button
                                    variant="outline"
                                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                                    onClick={clearCart}
                                >
                                    Limpar Carrinho
                                </Button>
                                <Button className="bg-green-600 hover:bg-green-700">
                                    Finalizar Compra
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
