import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
 interface feedPost {
    id: string;
    title: string;
    type: string;
    item: string;
  }

export default async function Feed() {

  const supabase = createServerComponentClient({ cookies });

  let { data: enrollable_activities, error } = await supabase
  .from('enrollable_activities')
  .select()

  return (
    <div className='flex justify-center '>
      <ul>{enrollable_activities?.map((activity) => (
          <div
            className='flex items-center w-full h-16 bg-base-200 rounded-md m-10 p-3'
            key={activity.id}
          >
            <li>
              {activity.excercise}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
