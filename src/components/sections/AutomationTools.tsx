import React from 'react';

export function AutomationTools() {
  const tools = [
    {
      name: "Zapier",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnphcGllcjwvdGV4dD4KPC9zdmc+"
    },
    {
      name: "Make",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1ha2U8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      name: "Microsoft Power Automate",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBvd2VyIEF1dG9tYXRlPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      name: "IFTTT",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklGVFRUPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      name: "Integromat",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkludGVncm9tYXQ8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      name: "n8n",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm44bjwvdGV4dD4KPC9zdmc+"
    },
    {
      name: "Pabbly",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBhYmJseTwvdGV4dD4KPC9zdmc+"
    },
    {
      name: "Automate.io",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgMTQ0IDU4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSI3MiIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF1dG9tYXRlLmlvPC90ZXh0Pgo8L3N2Zz4="
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Automation Platforms We Work With
          </h2>
          <p className="text-lg text-white/70 max-w-3xl font-sans">
            We integrate with leading automation platforms to provide seamless workflow solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                width={144}
                height={58}
                className="w-full h-auto max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
