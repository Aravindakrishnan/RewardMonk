import { createClient } from "@supabase/supabase-js";
import { redirect } from "react-router-dom";

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUsersEmoji() {
    const {data,error} = await supabase.from("UsersEmoji").select("*");
    return data;
}

export async function getSession() {
    const {data,error} =  await supabase.auth.getSession();
    return data;
}

export async function Login() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    return data
}

export async function logOut() {
    const {data,error} = await supabase.auth.signOut();
    redirect("/")
    location.reload(); // refreshes the page
    return data;
}

export async function getUsers(email) {
    const {data,error} = await supabase.from("UsersEmoji").select("*");
    return data;
}

export async function getXp(email) {
    const {data, error} = await supabase.from("Users").select("*").like("email",email);
    const user = data[0];
    console.log(user)
    if (!user) {
        return {xp : 0};
    }
    else {
        return {xp : user.xp};
    }
}

export async function updateXp({email,xp,isPositive}) {

    const {data, error} = await supabase.from("Users").select("*").like("email",email);
    console.log(data?.[0]);
    // if there is no user;
    console.log(email,xp)
    if ((data.length === 0)) {
        console.log("I'm in 😀");
        try {
            const { data, error } = await supabase.from("Users").insert([
                {
                    email: email,
                    xp : xp
                }
            ]);
    
            if (error) {
                console.error("Error inserting data:", error);
                return error;
            }
    
            console.log("XP Data inserted successfully:", data);
            return data;

        } catch (e) {
            console.error("An unexpected error occurred:", e);
            return e;
        }
    }

    else {
        const {data, error_} = await supabase.from("Users").select("*").like("email",email);
        const old_xp = data[0]?.xp; 
        if (isPositive) {
            // increase the xp
            console.log("Increase the XP")
            const { error } = await supabase
            .from('Users')
            .update({ xp: old_xp + xp  })
            .like('email', email)
        }
        else {
            console.log("Decrease the XP")
            const { error } = await supabase
            .from('Users')
            .update({ xp: old_xp - xp  })
            .like('email', email)
        }
    }

}

export async function insert({ emoji, xp, date, isPositive, email }) {
    try {
        const { data, error } = await supabase.from("UsersEmoji").insert([
            {
                emoji: emoji,
                xp: xp,
                date: date,
                isPositive: isPositive,
                email: email,
            },
        ]);

        if (error) {
            console.error("Error inserting data:", error);
            return error;
        }

        console.log("Data inserted successfully:", data);
        return data;
    } catch (e) {
        console.error("An unexpected error occurred:", e);
        return e;
    }
}


export default supabase;