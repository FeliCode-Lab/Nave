import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Bell, Shield, Palette, Globe } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl text-white">Configurações</h2>
        <p className="text-gray-400">Gerencie as preferências do sistema</p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Perfil do Administrador
          </CardTitle>
          <CardDescription className="text-gray-400">
            Informações da conta principal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Nome</Label>
              <Input
                id="name"
                defaultValue="Lucas"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="lucas@navemae.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-white">Função</Label>
            <Input
              id="role"
              defaultValue="Administrador"
              disabled
              className="bg-gray-800 border-gray-700 text-gray-400"
            />
          </div>
          <Button className="bg-white text-black hover:bg-gray-200">
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notificações
          </CardTitle>
          <CardDescription className="text-gray-400">
            Configure como você recebe notificações
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Notificações por Email</Label>
              <p className="text-sm text-gray-400">Receba atualizações por email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-gray-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Alertas de Segurança</Label>
              <p className="text-sm text-gray-400">Notificações de atividades suspeitas</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-gray-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Relatórios Semanais</Label>
              <p className="text-sm text-gray-400">Resumo semanal de atividades</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Aparência
          </CardTitle>
          <CardDescription className="text-gray-400">
            Personalize a interface do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Modo Escuro</Label>
              <p className="text-sm text-gray-400">Ativado permanentemente</p>
            </div>
            <Switch defaultChecked disabled />
          </div>
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Sistema
          </CardTitle>
          <CardDescription className="text-gray-400">
            Configurações gerais do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-white">Idioma</Label>
            <Input
              id="language"
              defaultValue="Português (Brasil)"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-white">Fuso Horário</Label>
            <Input
              id="timezone"
              defaultValue="America/Sao_Paulo (GMT-3)"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
