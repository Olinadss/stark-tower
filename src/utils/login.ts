interface User {
  name: string;
}

export async function login(name: string): Promise<User | null> {
  try {
    if (name.length > 0) {
      localStorage.setItem("user", JSON.stringify(name));

      return { name };
    }

    return null;
  } catch (error) {
    console.error("Erro no login", error);
    return null;
  }
}

export function getCurrentUser(): User | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function logout() {
  localStorage.removeItem("user");
}
