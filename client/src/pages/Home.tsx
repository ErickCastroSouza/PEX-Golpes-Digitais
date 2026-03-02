import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";

import { 
  ShieldAlert, 
  Smartphone, 
  Headset, 
  MessageCircle, 
  AlertOctagon, 
  BrainCircuit, 
  Camera, 
  Mic, 
  Lightbulb, 
  FileText, 
  Landmark, 
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Send
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SectionHeading } from "@/components/SectionHeading";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Home() {
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      message: ""
    }
  });

  const { mutate: sendMessage, isPending } = useCreateContactMessage();

  const onSubmit = (data: InsertContactMessage) => {
    sendMessage(data, {
      onSuccess: () => form.reset()
    });
  };

  const scrollToContent = () => {
    document.getElementById('golpes-comuns')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-8"
        >
          <ShieldCheck className="w-5 h-5" />
          <span>Guia de Proteção Digital</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl text-balance mb-6"
        >
          Como não cair em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">golpes virtuais</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-balance"
        >
          Com o crescimento rápido dos golpes digitais e o uso de inteligência artificial para criar vídeos falsos (deepfakes), a informação é sua melhor defesa. Aprenda a se proteger de forma simples.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 text-lg h-14 hover-elevate active-elevate-2 shadow-lg shadow-primary/25"
            onClick={scrollToContent}
          >
            Começar a aprender <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* 2. GOLPES COMUNS */}
      <section id="golpes-comuns" className="py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Golpes Digitais Mais Comuns" 
            subtitle="Os criminosos usam táticas conhecidas. Conhecê-las é o primeiro passo para não se tornar uma vítima."
            icon={<ShieldAlert className="w-8 h-8" />}
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Golpe do Pix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Você recebe uma mensagem com uma promessa urgente de lucro fácil ou um pedido desesperado de transferência rápida.
                    <strong className="block mt-2 text-foreground">Atenção:</strong> Desconfie de urgência e não faça Pix sem confirmar a identidade da pessoa por ligação.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Headset className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Falso Suporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Alguém liga se passando pelo seu banco ou por uma empresa famosa dizendo que há um problema na sua conta.
                    <strong className="block mt-2 text-foreground">Atenção:</strong> Bancos nunca ligam pedindo senhas, códigos ou que você faça transferências para "testar" o sistema.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">WhatsApp Clonado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Um número desconhecido manda mensagem usando a foto de um familiar ou amigo dizendo que trocou de número e precisa de dinheiro.
                    <strong className="block mt-2 text-foreground">Atenção:</strong> Ligue para o número antigo da pessoa para confirmar a história.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. COMO IDENTIFICAR */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeading 
              title="Checklist: Como identificar um golpe" 
              subtitle="Fique atento a estes sinais vermelhos. Se a situação apresentar um ou mais destes itens, pare imediatamente."
              align="left"
              icon={<AlertOctagon className="w-8 h-8" />}
            />
            <div className="mt-8 flex flex-col gap-6">
              {[
                { title: "Urgência exagerada", desc: "Eles dizem que algo ruim vai acontecer se você não agir AGORA." },
                { title: "Pedido de dinheiro inesperado", desc: "Mesmo que pareça ser alguém que você conhece." },
                { title: "Links suspeitos", desc: "Mensagens com links estranhos que pedem para você clicar." },
                { title: "Erros de português", desc: "Mensagens de 'empresas' com erros graves de digitação." },
                { title: "Pressão emocional", desc: "Tentam te deixar com medo, culpa ou excessivamente animado." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
                >
                  <div className="mt-1 w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                    <AlertOctagon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] -z-10 transform rotate-3 scale-105" />
            <img 
              /* landing page person looking confused at smartphone */
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=800&q=80" 
              alt="Pessoa olhando para o celular com dúvida" 
              className="rounded-[3rem] shadow-2xl object-cover aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      {/* 4. DEEPFAKES */}
      <section className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 text-blue-400 mx-auto">
              <BrainCircuit className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Vídeos Falsos feitos por IA (Deepfakes)
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Hoje existem tecnologias capazes de criar vídeos extremamente realistas, copiando o rosto e a voz de pessoas famosas ou até de conhecidos. O nome disso é <strong>Deepfake</strong>.
            </p>

            {/* NEW SUBTOPIC: GLOBAL IMPACT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-blue-500/10 border border-blue-500/30 p-8 rounded-3xl mb-16 text-left"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 shrink-0">
                  <AlertOctagon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">O Perigo Além do Dinheiro</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Deepfakes não são usados apenas para roubar dinheiro. Eles são ferramentas poderosas de <strong>manipulação em massa</strong>. 
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Fraudes em Eleições e política
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Destruição de reputações
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Espalhamento de notícias falsas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Chantagens e extorsão
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Mic, title: "Movimentos Labiais", desc: "A boca muitas vezes não acompanha perfeitamente as palavras faladas." },
              { icon: Camera, title: "Expressões Estranhas", desc: "Piscadas irregulares ou falta de emoção natural no rosto." },
              { icon: Headset, title: "Voz Robótica", desc: "A entonação pode soar artificial, sem emoção ou com pausas estranhas." },
              { icon: Lightbulb, title: "Iluminação Falsa", desc: "Sombras e luzes que não fazem sentido com o ambiente do vídeo." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm hover:bg-slate-800 transition-colors"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 p-1 rounded-3xl shadow-2xl shadow-yellow-500/20"
          >
            <div className="bg-slate-900 rounded-[1.4rem] p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 mb-4 uppercase tracking-widest">
                REGRA DE OURO
              </h3>
              <p className="text-2xl md:text-4xl font-bold text-white">
                Nunca compartilhe ou envie dinheiro antes de verificar a fonte.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. O QUE FAZER */}
      <section className="py-24 bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Caiu em um golpe? O que fazer." 
          subtitle="Agir rápido é fundamental. Siga estes passos imediatamente se você perceber que foi vítima de uma fraude."
          icon={<ShieldCheck className="w-8 h-8" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-8xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">1</div>
            <Card className="h-full border-2 border-border/50 bg-card/50 backdrop-blur-sm pt-4">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Landmark className="w-7 h-7" />
                </div>
                <CardTitle>Avise o banco imediatamente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ligue para o seu banco através dos números oficiais (no verso do cartão) e informe a situação para tentar bloquear transações.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="text-8xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">2</div>
            <Card className="h-full border-2 border-border/50 bg-card/50 backdrop-blur-sm pt-4">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7" />
                </div>
                <CardTitle>Faça o Boletim de Ocorrência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Registre um B.O. Isso pode ser feito online pela delegacia eletrônica do seu estado. Reúna prints e comprovantes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="text-8xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">3</div>
            <Card className="h-full border-2 border-border/50 bg-card/50 backdrop-blur-sm pt-4">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <CardTitle>Não tenha vergonha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Golpistas são profissionais da manipulação e enganam milhares de pessoas todos os dias. Falar sobre o assunto ajuda a proteger outras pessoas.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer className="bg-slate-50 border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ficou com alguma dúvida?</h3>
            <p className="text-muted-foreground">Envie sua pergunta de forma anônima ou identificada. Estamos aqui para ajudar a esclarecer como se proteger no mundo digital.</p>
          </div>

          <Card className="border-border shadow-xl shadow-black/5">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Seu Nome (opcional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Como prefere ser chamado?" 
                            className="h-12 text-base px-4 bg-background focus-visible:ring-primary/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">Sua Mensagem ou Dúvida</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva a situação suspeita ou o que gostaria de saber..." 
                            className="min-h-[120px] text-base p-4 resize-y bg-background focus-visible:ring-primary/20"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-12 text-lg font-semibold hover-elevate active-elevate-2 shadow-md shadow-primary/20"
                  >
                    {isPending ? "Enviando..." : (
                      <>Enviar Dúvida <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Erick de Castro Souza. Guia de Proteção Digital.</p>
            <p className="mt-2 italic">Este website foi criado como um projeto de extensão para a faculdade de Análise e Desenvolvimento de Sistemas.</p>
            <p className="mt-1">Compartilhe conhecimento, não caia em golpes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
