import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase.types';

interface Horse {
  id: number;
  name: string;
  breed: string;
  age: number;
  price: number;
  location: string;
  // ... other horse properties
}

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const FilterInput: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  onKeyDown,
  placeholder
}) => (
  <div>
    <label className="block font-bold mb-1">{label}</label>
    <input
      className="p-2 border rounded w-full"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  </div>
);

const FilterComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [filteredHorses, setFilteredHorses] = useState<Horse[]>([]);
  const [showResults, setShowResults] = useState(false);

  const allHorses: Horse[] = [
    {
      id: 1,
      name: 'Thunder',
      breed: 'Thoroughbred',
      age: 5,
      price: 5000,
      location: 'Stable A'
    },
    {
      id: 2,
      name: 'Spirit',
      breed: 'Quarter Horse',
      age: 7,
      price: 7000,
      location: 'Stable B'
    },
    {
      id: 3,
      name: 'Buddy',
      breed: 'Appaloosa',
      age: 6,
      price: 6000,
      location: 'Stable A'
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim() === '' && location.trim() === '') {
      setShowResults(false);
      return;
    }

    const filtered = allHorses.filter(
      (horse) =>
        horse.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) &&
        horse.location.toLowerCase().includes(location.toLowerCase().trim())
    );

    setFilteredHorses(filtered);
    setShowResults(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const [error, setError] = useState<string | null>(null);

  const supabase = createClientComponentClient<Database>();

  const getTraining = async () => {
    try {
      let { data: enrollable_activities, error } = await supabase
        .from('enrollable_activities')
        .select('title');

      if (error) throw error;
    } catch (error) {
      setError((error as Error).message);
      console.error(error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <FilterInput
        label="Search horse"
        value={searchQuery}
        onChange={setSearchQuery}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />

      <FilterInput
        label="Location"
        value={location}
        onChange={setLocation}
        onKeyDown={handleKeyDown}
        placeholder="Location"
      />

      <div className="grid grid-cols-2 gap-4">
        {/* ... your min age and max price inputs */}
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>

      {showResults && filteredHorses.length === 0 && <p>No horses found.</p>}

      {showResults && filteredHorses.length > 0 && (
        <ul className="space-y-2">
          {filteredHorses.map((horse) => (
            <li key={horse.id} className="p-2 border rounded">
              {horse.name} - {horse.breed} - {horse.age} years old - $
              {horse.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterComponent;
