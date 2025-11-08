import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  // Validação com perfis pré-definidos
  if (username === 'lucas' && password === '@admin') {
    onLogin();
  } else if (username === 'vinicius' && password === '@admin') {
    onLogin();
  } else if (username === 'justin' && password === '@admin') {
    onLogin();
  } else if (username === 'priscilla' && password === '@admin') {
    onLogin();
  } else if (username === 'gustavo' && password === '@admin') {
    onLogin();
  } else if (username === 'rafael' && password === '@admin') {
    onLogin();
  } else {
    setError('Usuário ou senha incorretos');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md bg-gray-950 border-gray-800">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl text-white">Nave Mãe 2.0</CardTitle>
          <CardDescription className="text-gray-400">
            Entre com suas credenciais para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white focus:ring-white"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/50 p-3 rounded-md border border-red-900">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
