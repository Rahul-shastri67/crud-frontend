import { useEffect, useState } from "react";

export default function UserForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({ name: "", email: "", city: "", state: "" });

  useEffect(() => {
    if (initialData)
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        city: initialData.city || "",
        state: initialData.state || "",
      });
    else setForm({ name: "", email: "", city: "", state: "" });
  }, [initialData]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required");
      return;
    }
    onSubmit(form);
    setForm({ name: "", email: "", city: "", state: "" });
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} autoFocus />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-row">
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="state" placeholder="State" value={form.state} onChange={handleChange} />
      </div>

      <div className="form-actions">
        <button type="submit" className="primary">{initialData ? "Update" : "Add"}</button>
        {initialData && <button type="button" className="ghost" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
