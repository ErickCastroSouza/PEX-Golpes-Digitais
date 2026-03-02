import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertContactMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Falha ao enviar mensagem");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos o seu contato. Retornaremos em breve se necessário.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Ops, algo deu errado",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
