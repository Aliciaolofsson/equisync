import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Index() {
  interface feedPost {
    id: string;
    title: string;
  }

  const feedPost = [{}];
  const supabase = createServerComponentClient({ cookies });

  const { data: enrollable_activities } = await supabase
    .from('enrollable_activities')
    .select();

  return (
    <div className="flex justify-center m-10 ">
      <ul>
        {enrollable_activities?.map((activity) => (
          <div
            className="flex items-center w-full h-16 bg-base-200 rounded-md m-10 p-3"
            key={activity.id}
          >
            <li>
              {feedPost.map((feedPosts) => (
                <h2 key='discipline'>Discipline:&nbsp;</h2>
              ))}
              {activity.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
