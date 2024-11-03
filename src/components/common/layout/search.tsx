import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'
import Containerf from '../containerf'

const Searchq: React.FC<SearchqProps> = () => {
  return (
    <>
      <div className="flex">
        <div className="flex gap-2">
          <Input
            className=" pr-40 w-auto focus:outline-gray-900 focus:shadow-lg "
            type="search"
            placeholder="Search Episode"
          />
          <div className="flex items-center">
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchq
