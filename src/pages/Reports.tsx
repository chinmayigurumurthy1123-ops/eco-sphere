import DashboardNav from '../components/DashboardNav';
import { Download, FileText, LineChart } from 'lucide-react';
import { useMemo } from 'react';

export default function Reports() {
  const data = useMemo(() => (
    [
      { month: 'Jan', carbon: 3.2 },
      { month: 'Feb', carbon: 2.8 },
      { month: 'Mar', carbon: 3.0 },
      { month: 'Apr', carbon: 2.6 },
      { month: 'May', carbon: 2.4 },
      { month: 'Jun', carbon: 2.4 },
    ]
  ), []);

  const csv = useMemo(() => {
    const header = 'Month,Carbon(t)\n';
    const rows = data.map((d) => `${d.month},${d.carbon}`).join('\n');
    return header + rows;
  }, [data]);

  const downloadCSV = () => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sustainability-report.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const doc = new Blob([
      `EcoSphere Sustainability Report\n\n` +
      data.map((d) => `${d.month}: ${d.carbon} t CO2`).join('\n')
    ], { type: 'application/pdf' });
    const url = URL.createObjectURL(doc);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sustainability-report.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  const max = Math.max(...data.map((d) => d.carbon));

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Sustainability Reports</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <LineChart className="h-5 w-5 text-[#2D5A27]" />
            <h2 className="font-semibold text-gray-900">Historical Trends</h2>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {data.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-end h-48">
                  <div
                    className="w-full bg-gradient-to-t from-[#2D5A27] to-[#4a8a44] rounded-t-lg"
                    style={{ height: `${(d.carbon / max) * 100}%` }}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">{d.month}</div>
                <div className="text-xs text-gray-500">{d.carbon}t</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Export Report</h3>
            <p className="text-sm text-gray-600">Download your latest sustainability report</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={downloadCSV} className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37] flex items-center gap-2">
              <Download className="h-4 w-4" /> CSV
            </button>
            <button onClick={downloadPDF} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <Download className="h-4 w-4" /> PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
