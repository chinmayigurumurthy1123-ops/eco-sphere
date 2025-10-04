import { useMemo } from 'react';
import { BarChart3, Download } from 'lucide-react';
import { useToast } from '../components/Toast';
import { useNotifications } from '../components/Notifications';

interface ReportRow {
  category: string;
  valueTons: number;
}

export default function Reports() {
  const { showToast } = useToast();
  const { addNotification } = useNotifications();

  const rows: ReportRow[] = useMemo(
    () => [
      { category: 'Transportation', valueTons: 1.80 },
      { category: 'Energy', valueTons: 0.32 },
      { category: 'Waste', valueTons: 0.28 },
    ],
    []
  );

  const total = useMemo(() => rows.reduce((s, r) => s + r.valueTons, 0), [rows]);

  const exportCsv = () => {
    const header = 'Category,Value (tons CO2)';
    const lines = rows.map((r) => `${r.category},${r.valueTons.toFixed(2)}`);
    const csv = [header, ...lines, `Total,${total.toFixed(2)}`].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sustainability-report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Report exported as CSV', 'success');
    addNotification('Sustainability report exported', 'progress');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Reporting Tools</h1>
          </div>
          <p className="text-gray-600">Auto-generated sustainability reports with export options</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Monthly Summary</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#2D5A27]/10">
              <div className="text-xs text-gray-600">Total Footprint</div>
              <div className="text-2xl font-bold text-gray-900">{total.toFixed(2)} t</div>
            </div>
            <div className="p-4 rounded-lg bg-[#FF8C42]/10">
              <div className="text-xs text-gray-600">Offsets Purchased</div>
              <div className="text-2xl font-bold text-gray-900">1.80 t</div>
            </div>
            <div className="p-4 rounded-lg bg-[#87CEEB]/10">
              <div className="text-xs text-gray-600">Net Impact</div>
              <div className="text-2xl font-bold text-gray-900">{(total - 1.80).toFixed(2)} t</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Category Breakdown</h2>
            <button
              onClick={exportCsv}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#3d7a37]"
            >
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-100">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Value (tons CO₂)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.category} className="border-t border-gray-100">
                    <td className="px-4 py-2">{r.category}</td>
                    <td className="px-4 py-2">{r.valueTons.toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="border-t border-gray-100 font-semibold">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2">{total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
