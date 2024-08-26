import { Nav, NavLink } from "@/components/Nav";

export default function AdminLayout({ 
    children 
  }) {
    return (<>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/batches">Batches</NavLink>
                <NavLink href="/admin/orders">Orders</NavLink>
                <NavLink href="/admin/customers">Customers</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
  }