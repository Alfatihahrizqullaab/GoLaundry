import { Navigation, MapPin } from 'lucide-react';

interface LocationPickerProps {
    latitude: string;
    longitude: string;
    isLocating: boolean;
    onGetLocation: () => void;
}

export const LocationPicker = ({latitude, longitude, isLocating, onGetLocation}: LocationPickerProps) => {
    return(
        <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium text-gray-900 flex justify-between">
                <span>Titik Koordinat Lokasi (Maps)</span>
                <button 
                    type="button"
                    onClick={onGetLocation}
                    className="text-blue-600 text-xs flex items-center gap-1 cursor-pointer hover:underline focus:outline-none"
                    >
                    {isLocating ? (
                        <span className="animate-pulse">Mencari...</span>
                    ) : (
                        <><Navigation size={12} /> Gunakan Lokasi Saat Ini</>
                    )}
                </button>
            </label>
            
            <div className="p-1 border border-gray-200 rounded-xl bg-gray-50">
                {/* Placeholder Map - Nantinya bisa diganti komponen GoogleMaps/Leaflet */}
                <div className="w-full h-32 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-center relative overflow-hidden mb-2">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <MapPin size={32} className="text-red-500 -mt-4 animate-bounce" />
                    <div className="w-4 h-1 bg-black/20 rounded-full blur-sm mt-1"></div>
                </div>
                </div>
                
                {/* Input Koordinat (Format String) */}
                <div className="grid grid-cols-2 gap-2 px-1 pb-1">
                <input 
                    readOnly 
                    value={latitude} 
                    className="w-full px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs text-gray-500" 
                    placeholder="Latitude" 
                />
                <input 
                    readOnly 
                    value={longitude} 
                    className="w-full px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs text-gray-500" 
                    placeholder="Longitude" 
                />
                </div>
            </div>
        </div>
    );
}