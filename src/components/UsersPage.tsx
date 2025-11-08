import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, UserPlus } from 'lucide-react';
import { useState } from 'react';

// Dados de usuários cadastrados
const registeredUsers = [
  { id: 1, name: 'Lucas', email: 'lucas@navemae.com', role: 'Admin', status: 'online', company: 'QuantumCert' },
  { id: 2, name: 'Maria Silva', email: 'maria@navemae.com', role: 'Manager', status: 'online', company: 'BikiLock' },
  { id: 3, name: 'João Santos', email: 'joao@navemae.com', role: 'User', status: 'offline', company: 'QuantumCert' },
  { id: 4, name: 'Ana Costa', email: 'ana@navemae.com', role: 'User', status: 'online', company: 'BikiLock' },
  { id: 5, name: 'Pedro Lima', email: 'pedro@navemae.com', role: 'Manager', status: 'offline', company: 'QuantumCert' },
  { id: 6, name: 'Carla Souza', email: 'carla@navemae.com', role: 'User', status: 'online', company: 'BikiLock' },
  { id: 7, name: 'Bruno Oliveira', email: 'bruno@navemae.com', role: 'Admin', status: 'online', company: 'QuantumCert' },
  { id: 8, name: 'Julia Martins', email: 'julia@navemae.com', role: 'Manager', status: 'offline', company: 'BikiLock' },
];

export function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = registeredUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onlineUsers = registeredUsers.filter(u => u.status === 'online').length;

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-400">Total de Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white">{registeredUsers.length}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-400">Usuários Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white">{onlineUsers}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-400">Usuários Offline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white">{registeredUsers.length - onlineUsers}</div>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <Card className="bg-gray-950 border-gray-800">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-white">Usuários Cadastrados</CardTitle>
              <CardDescription className="text-gray-400">
                Gerenciar usuários com acesso ao sistema
              </CardDescription>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">
              <UserPlus className="w-4 h-4 mr-2" />
              Adicionar Usuário
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Buscar usuário por nome, email ou empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-white text-black">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-950 ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-600'}`} />
                  </div>
                  <div>
                    <p className="text-sm text-white">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{user.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {user.role}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              Nenhum usuário encontrado
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
