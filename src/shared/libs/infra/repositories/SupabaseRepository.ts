import { supabase } from "shared/api/supabase";
import { Repository } from "../contracts";
import { Query } from "shared/types";

export class SupabaseRepository extends Repository {
  private tableName: string;

  constructor(tableName: string) {
    super();
    this.tableName = tableName;
  }

  async insertOne(body: any): Promise<any> {
    const { data, error } = await supabase
      .from(this.tableName)
      .insert(body)
      .select()
      .single();
    return { data, error };
  }

  async add(body: any): Promise<any> {
    const { data, error } = await supabase.from(this.tableName).insert(body).select();
    return { data, error };
  }

  async updateOne(query: Query, data: any): Promise<any> {
    const { data: updatedData, error } = await supabase
      .from(this.tableName)
      .update(data)
      .match(query.fields)
      .select()
      .single();
    return { data: updatedData, error };
  }

  async update(query: Query, data: any): Promise<any> {
    const { data: updatedData, error } = await supabase
      .from(this.tableName)
      .update(data)
      .match(query?.fields)
      .select();
    return { data: updatedData, error };
  }

  async incrementOne(query: Query, data: any): Promise<any> {
    const { data: updatedData, error } = await supabase
      .from(this.tableName)
      .update(data)
      .match(query.fields)
      .select()
      .single();
    return { data: updatedData, error };
  }

  async increment(query: Query, data: any): Promise<any> {
    const { data: updatedData, error } = await supabase
      .from(this.tableName)
      .update(data)
      .match(query.fields)
      .select();
    return { data: updatedData, error };
  }

  async deleteOne(query: Query): Promise<any> {
    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .match(query?.fields)
      .single();
    return !!error;
  }

  async getOne(query: Query, options?: any): Promise<any> {
    const { data: result, error } = await supabase
      .from(this.tableName)
      .select(options?.select ?? "*")
      .match(query?.fields)
      .single();
    return { data: result, error };
  }

  async getAll(query: Query): Promise<any> {
    const { data: result, error } = await supabase
      .from(this.tableName)
      .select(query?.options?.select ?? "*")
      .match(query?.fields);
    return { data: result, error };
  }

  async getPaginate(
    page: number,
    query: Query,
    sort: any,
    limit: number,
    projection: any
  ): Promise<any> {
    const { data: result, error } = await supabase
      .from(this.tableName)
      .select(projection)
      .match(query ?? {})
      .order(sort, { ascending: true })
      .range((page - 1) * limit, page * limit - 1);
    return { data: result, error };
  }

  async getCount(query: Query): Promise<any> {
    const { count, error } = await supabase
      .from(this.tableName)
      .select("count", { count: "exact" })
      .match(query.fields)
      .single();
    return { data: count, error };
  }

  async aggregate(query: Query): Promise<any> {
    const { data: result, error } = await supabase
      .from(this.tableName)
      .select(query.options?.select)
      .match(query.fields);
    return { data: result, error };
  }

  async deleteMany(query: Query): Promise<any> {
    const { error } = await supabase.from(this.tableName).delete().match(query.fields);
    return !!error;
  }
}
