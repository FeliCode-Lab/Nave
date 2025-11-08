import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, DollarSign, Activity, ExternalLink } from 'lucide-react';

const salesData = [
  { month: 'Jan', vendas: 4000, custos: 2400 },
  { month: 'Fev', vendas: 3000, custos: 1398 },
  { month: 'Mar', vendas: 2000, custos: 9800 },
  { month: 'Abr', vendas: 2780, custos: 3908 },
  { month: 'Mai', vendas: 1890, custos: 4800 },
  { month: 'Jun', vendas: 2390, custos: 3800 },
];

const performanceData = [
  { day: 'Seg', performance: 65 },
  { day: 'Ter', performance: 59 },
  { day: 'Qua', performance: 80 },
  { day: 'Qui', performance: 81 },
  { day: 'Sex', performance: 56 },
  { day: 'Sab', performance: 55 },
  { day: 'Dom', performance: 40 },
];

// Dados das empresas
const companiesData = {
  quantumcert: {
    name: 'QuantumCert',
    activeUsers: 1247,
    growth: '+15.3%',
    url: 'https://quantumcert.vercel.app/'
  },
  bikilock: {
    name: 'BikiLock',
    activeUsers: 892,
    growth: '+8.7%',
    url: 'https://bike-lock-iota.vercel.app/'
  }
};

export function DashboardHome() {
  return (
    <div className="space-y-4">
      {/* Companies Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{companiesData.quantumcert.name}</CardTitle>
              <a href={companiesData.quantumcert.url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <CardDescription className="text-gray-400">
              Usuários ativos na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl text-white">{companiesData.quantumcert.activeUsers.toLocaleString()}</div>
                <p className="text-sm text-green-400 mt-1">{companiesData.quantumcert.growth} este mês</p>
              </div>
              <Users className="w-12 h-12 text-white opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{companiesData.bikilock.name}</CardTitle>
              <a href={companiesData.bikilock.url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <CardDescription className="text-gray-400">
              Usuários ativos na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl text-white">{companiesData.bikilock.activeUsers.toLocaleString()}</div>
                <p className="text-sm text-green-400 mt-1">{companiesData.bikilock.growth} este mês</p>
              </div>
              <Users className="w-12 h-12 text-white opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* General Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm text-white">Total de Vendas</CardTitle>
            <DollarSign className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-white">R$ 45.231</div>
            <p className="text-xs text-gray-400">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm text-white">Usuários Totais</CardTitle>
            <Users className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-white">{(companiesData.quantumcert.activeUsers + companiesData.bikilock.activeUsers).toLocaleString()}</div>
            <p className="text-xs text-gray-400">
              Combinado de ambas plataformas
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm text-white">Crescimento</CardTitle>
            <TrendingUp className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-white">+12.5%</div>
            <p className="text-xs text-gray-400">
              +19% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm text-white">Taxa de Atividade</CardTitle>
            <Activity className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-white">573</div>
            <p className="text-xs text-gray-400">
              +201 desde a última hora
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Sales Chart */}
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Vendas vs Custos</CardTitle>
            <CardDescription className="text-gray-400">
              Comparativo mensal dos últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '6px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Bar dataKey="vendas" fill="#ffffff" />
                <Bar dataKey="custos" fill="#9ca3af" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Chart */}
        <Card className="bg-gray-950 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Performance Semanal</CardTitle>
            <CardDescription className="text-gray-400">
              Índice de performance dos últimos 7 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '6px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#ffffff" 
                  strokeWidth={2}
                  dot={{ fill: '#ffffff', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
